import React from 'react'
import ReactDOM from 'react-dom/client'

// Временный тест без роутера
const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <div style={{ padding: '20px', background: 'white', color: 'black' }}>
    <h1>Проверка сборки</h1>
    <p>Если ты это видишь, значит Vite и GitHub Pages настроены верно.</p>
  </div>
)