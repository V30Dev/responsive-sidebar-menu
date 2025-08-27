const dark = document.querySelector('.dark')
const night = document.querySelector('.night')
const light = document.querySelector('.light')

const sidebar = document.querySelector('.sidebar')
let active_list_item = document.querySelector('.sidebar__list_item.active')
const sidebar_list_items = document.querySelectorAll('.sidebar__list_item')

sidebar_list_items.forEach(item => item.addEventListener('click', () => {
    active_list_item.classList.remove('active')
    item.classList.add('active')
    active_list_item = item
}))

dark.addEventListener('click', () => {
    sidebar.className = 'sidebar'
    sidebar_list_items.forEach(item => item.className = 'sidebar__list_item')
    active_list_item.className = 'sidebar__list_item active'
})

night.addEventListener('click', () => {
    sidebar.className = 'sidebar night'
    sidebar_list_items.forEach(item => item.className = 'sidebar__list_item night')
    active_list_item.className = 'sidebar__list_item night active'
})

light.addEventListener('click', () => {
    sidebar.className = 'sidebar light'
    sidebar_list_items.forEach(item => item.className = 'sidebar__list_item light')
    active_list_item.className = 'sidebar__list_item light active'
})
