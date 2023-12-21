# Какие бывают сервисы для git?

Чаще всего используемые - GitHub, Bitbucket, GitLab.



# Merge vs rebase

Обе команды имеют одинаковое предназначение - добавить изменения из одной ветки в другую. Но делают они это по-разному.

**Merge**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/d201b23c-d927-4c5c-a2f3-32436ec5e522)

Допустим, у нас есть ветки main и feature. Мы хотим в ветку feature добавить изменения из main, которые в ней произощли после того, как мы отпачковали feature.

Merge добавляет в feature новый коммит, который заключает в себе обновленное состояние (все изменения из ветки main и ветки feature). Особенность merge - команда оставляет историю чистой. То есть все коммиты в ветке feature до merge commit будут иметь те же хэши, что и до применения команды.

**Что произойдет с хэшами после мержа feature в main?**

Такие хэши есть в main до pull request.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/657dcb4c-1065-44ce-a960-c946a3ff123d)

А такие - в feature

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/8cccab2f-8171-44fd-b1b7-5d70b1d82129)

А вот так будет выглядеть ветка main после слияния:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/dff82ea2-b8a2-4be4-afdc-a238492b8b93)

**Rebase**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/7f0ae4b9-b6c5-4f91-8542-bf80cfe232cf)

Имеем те же ветки и те же задачи.

При использовании rebase мы буквально перебазируем нашу ветку feature на последний коммит из main. Это похоже на то, что мы буквально сегодня, вот только что отпочковались от main, с текущего head коммита.
