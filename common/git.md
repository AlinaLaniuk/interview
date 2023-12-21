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

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/37b9ebae-ae1d-4036-a087-f8c554d3e21c)


А такие - в feature

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/650aca99-4833-4fb8-96e5-823ac9189c7e)

А вот так будет выглядеть ветка main после слияния:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/5be72c71-c792-42bd-b793-bda5ab754c4a)

Новая история коммитов в main объединяет изменения из двух веток. То есть в main попадают все изменения из feature (все коммиты, включая merge коммит). При этом они выстраиваются в последовательности **по времени**.


**Rebase**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/7f0ae4b9-b6c5-4f91-8542-bf80cfe232cf)

Имеем те же ветки и те же задачи.

При использовании rebase мы буквально перебазируем нашу ветку feature на последний коммит из main. Это похоже на то, что мы буквально сегодня, вот только что отпочковались от main, с текущего head коммита.

**Что произойдет с хэшами после мержа feature2 в main?**

Вот как выглядит main до PR из feature2

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/c187b322-ed88-4731-b826-d6293ca732b7)


Вот так feature2

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/92c18ed3-0d13-429f-9655-8687b503c07d)


После PR:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/c32da53d-5dfa-4476-ad23-647f23265b09)


Выглядит так, будто произошло все тоже самое. Но понимать, что rebase меняет хэши в ветке, которая перебазируется на мейн. Создала третью ветку feature3 и добавила в нее коммит. Вот его хэш:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/b084b277-0850-40e2-b8a7-2abe5897200c)

Этот же коммит после ребейза:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/e155b92d-b97f-43e3-8a07-8b9c54858f44)

