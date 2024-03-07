# Alert

В качестве параметра передаем текст, который должен быть отображен в модальном окне. От пользователя не требуется ничего, кроме нажатия на кнопку ОК. С страницей пользователь не может взаимодействовать до закрытия модалного окна.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/9a04b5df-62af-4d32-981e-923a90d9a173)

# Promt

Также функция для взаимодействия с пользователем, но уже может брать от пользователя некоторое значение и сохранять. Тот же alert, только с инпутом.
Принимает два аргумента - текст сообщения и дефолтное значение, которое может изначально стоять в инпуте (второй - необязательно). 
Пользователь может ввести некоторое значение и нажать ОК/Enter, а может нажать Esc/Cancel. В первом случае мы получим введенное в инпут значение, во втором - null.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/05f035df-8ad4-45a6-8439-fd5b3419b221)

Нажат ОК:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/1cfd1f2f-fb6a-48b9-9c3a-c1e46b2c4e2b)

Нажат Esc:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/5ef4c73d-1740-490f-9e78-71f927ea3121)

# Confirm

Принимает в качестве аргумента сообщение и предлагает пользователю согласится или нет с этим сообщением. Вовзращает true или false.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/c57bcf2c-3a40-4eac-9f9c-e754f2f87675)

Нажата OK:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/735057d3-0860-401d-88e1-5d70d8cc3098)

Нажата Esc:

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/099bc29f-ae5d-46a7-9805-4d86b206e27f)
