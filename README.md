====ТЕСТОВЕ====
З апішки приходять дані у формані ієрархії. Потрібно відобразити його у форматі дерева, можна використати будь-який компонент.
мусить бути 3 типи іконок, не обов'язково як на прикладі, але хоча б одна з іконок повинна бути не вбудована в компонент, а кастомна:
- іконка файлу, наприклад DiseaseAtlasAssociatedPopup.js, saga.js
- іконка папки, в якій є тільки файли, і нема папок, або вона пуста, наприклад components
- іконка папки, в якій є вкладені папки, наприклад DiseaseAtlas
На клік по компоненту його прямі нащадки повинні відобразитись десь на сторінці, або навіть просто алертом. Наприклад, при кліку на DiseaseAtlas буде показано 5 елементів списку: components, store, DiseaseAtlasPage.js, DiseaseAtlasPage.css
Дані потрібно брати так, якби був реально бекенд з апішкою, але замість АПІ колу можна просто застабити жсон нижче.
Прохання крім коду такою у відповіді викласти фото результату роботи застосунку
Формат даних:
[
{
name: "DiseaseAtlas",
subitems: [
{
name: "components",
subitems: [
{
name: "DiseaseAtlasAssociatedPopup.js"
},
{
name: "DiseaseAtlasTreeFolder.js"
},
]
},
{
name: "store",
subitems: [
{
name: "reducer.js"
},
{
name: "saga.js"
},
{
name: "selectors.js"
},
]
},
{
name: "DiseaseAtlasPage.js"
},
{
name: "DiseaseAtlasPage.css"
},
{
name: "Utils.js"
},
]
},
{
name: "FindRelated",
},
]
приклад візуалізації: https://drive.google.com/file/d/1t-duXYkAFJU3ogsHEHcvvZxD5sgWIwob/view?usp=sharing
