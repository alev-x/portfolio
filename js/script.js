// script.js

// 1. Бургер-меню для мобильных
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // анимация бургера (можно добавить)
        burger.classList.toggle('active');
    });
}

// 2. Табы
const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsPanes = document.querySelectorAll('.tabs__pane');

tabsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        tabsBtns.forEach(b => b.classList.remove('active'));
        // Добавляем активный класс текущей кнопке
        btn.classList.add('active');

        // Прячем все панели
        tabsPanes.forEach(pane => pane.classList.remove('active'));

        // Показываем панель, соответствующую data-tab
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// 3. Аккордеон
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion__header');
    header.addEventListener('click', () => {
        // Закрываем все другие открытые элементы (если нужно)
        accordionItems.forEach(i => {
            if (i !== item && i.classList.contains('active')) {
                i.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});

// 4. Плавный скролл к якорям (опционально, можно оставить встроенный scroll-behavior)
//    или добавить обработку для навигации
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Закрываем бургер-меню после клика
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});