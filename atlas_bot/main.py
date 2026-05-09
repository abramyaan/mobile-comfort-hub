import asyncio
import os
from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart
from aiogram.types import WebAppInfo, KeyboardButton, InlineKeyboardButton, InlineKeyboardMarkup
from aiogram.utils.keyboard import ReplyKeyboardBuilder
from dotenv import load_dotenv

# Загружаем переменные из .env
load_dotenv()

TOKEN = os.getenv("TOKEN")
SITE_URL = "https://abramyaan.github.io/mobile-comfort-hub"
# ID твоей группы
GROUP_ID = -5177306707 

if not TOKEN:
    raise ValueError("Ошибка: Переменная TOKEN не установлена!")

bot = Bot(token=TOKEN)
dp = Dispatcher()

@dp.message(CommandStart())
async def start_command(message: types.Message):
    builder = ReplyKeyboardBuilder()
    
    # Обновленное меню с кнопкой заявки
    builder.add(KeyboardButton(text="🛒 Открыть каталог", web_app=WebAppInfo(url=f"{SITE_URL}/?view=catalog")))
    builder.add(KeyboardButton(text="📝 Оформить заявку"))
    builder.add(KeyboardButton(text="🌐 Перейти на сайт", web_app=WebAppInfo(url=SITE_URL)))
    builder.add(KeyboardButton(text="📞 Контакты"))

    # Сетка кнопок: Каталог (1), Заявка (1), Сайт и Контакты (2 в ряд)
    builder.adjust(1, 1, 2)

    keyboard = builder.as_markup(
        resize_keyboard=True,
        persistent=True,
        input_field_placeholder="Выберите действие"
    )

    welcome_text = (
        "👋 **Здравствуйте! Выберите действие:**\n\n"
        "Мы — компания «Атлас». Продаем и обслуживаем мобильные туалетные кабины.\n\n"
        "Нажмите **«Оформить заявку»**, чтобы наш менеджер связался с вами, или используйте команды:\n"
        "🔹 /catalog — переход в каталог\n"
        "🔹 /site — полная версия сайта\n"
        "🔹 /contacts — наши контакты"
    )

    await message.answer(welcome_text, reply_markup=keyboard, parse_mode="Markdown")

@dp.message(lambda message: message.text in ["/catalog", "/site"])
async def open_web_app_via_link(message: types.Message):
    is_catalog = message.text == "/catalog"
    url = f"{SITE_URL}/?view=catalog" if is_catalog else SITE_URL
    label = "Каталог" if is_catalog else "Сайт"
    
    inline_kb = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text=f"🚀 Открыть {label}", web_app=WebAppInfo(url=url))]
    ])
    await message.answer(f"Нажмите кнопку ниже для перехода:", reply_markup=inline_kb)

@dp.message()
async def handle_messages(message: types.Message):
    # Логика для кнопки "Оформить заявку"
    if message.text == "📝 Оформить заявку":
        user = message.from_user
        username = f"@{user.username}" if user.username else "не указан"
        user_link = f"tg://user?id={user.id}"
        
        # Текст для менеджеров в группу
        report = (
            "🚀 **Новая заявка на консультацию!**\n\n"
            f"👤 **Имя:** {user.full_name}\n"
            f"🔗 **Username:** {username}\n"
            f"🆔 **ID:** `{user.id}`\n\n"
            f"📱 [Открыть чат с клиентом]({user_link})"
        )

        try:
            await bot.send_message(chat_id=GROUP_ID, text=report, parse_mode="Markdown")
            await message.answer(
                "✅ **Заявка успешно отправлена!**\n\n"
                "Наш менеджер изучит ваш профиль и свяжется с вами в ближайшее время."
            )
        except Exception as e:
            print(f"Ошибка отправки в группу: {e}")
            await message.answer("❌ Произошла ошибка. Пожалуйста, позвоните нам по телефону в разделе Контакты.")

    elif message.text in ["📞 Контакты", "/contacts"]:
        await message.answer(
            "📍 **Наш склад в СПб:**\n"
            "посёлок Тельмана, 60О, Тосненский район\n\n"
            "📞 **Телефон:** +7 (903) 097-60-05\n"
            "✉️ **Почта:** info@atlas-kabinka.ru",
            parse_mode="Markdown"
        )
    else:
        await message.answer("Пожалуйста, используйте меню или команды /catalog, /site.")

async def main():
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        print("Бот остановлен")