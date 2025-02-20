# Запуск фронтенда

### 1 Вариант - раздача статики
Данный способ удобно использовать в процессе разработки, чтобы постепенно тестировать api.

1) Добавьте содержимое архива front.zip в директорию resources/static/

в итогде в папке static должна оказаться папка assets и 2 файла - index.html и config.js

2) Чтобы статика не блокировалась security - нужно добавить в чейн следующий матчер

```java
.requestMatchers(
    "/",
    "/index.html",
    "/config.js",
    "/assets/**",
    "/login",
    "/registration",
    "/files/**"
).permitAll()
```

Все ваши защищенные и публичные эндпоинты лучше расположить с префиксом - например /api/

```java
.requestMatchers(HttpMethod.POST, "/api/auth/sign-in").permitAll()
.requestMatchers(HttpMethod.POST, "/api/auth/sign-up").permitAll()
.requestMatchers("/api/**").authenticated()
```

3) Чтобы react корректно отрабатывал при перезагрузке страницы (загружал ту же страницу и папку), нужно создать контроллер, который перенаправляет запросы на index.html - ниже полный код
```java
@Controller
public class FrontendController {

    @GetMapping(value = {"/registration", "/login", "/files/**"})
    public String handleRefresh() {
        return "forward:/index.html";
    }

}
```
4) Всё готово - можно запускать проект. Фронт будет доступен по адресу бэка - дефолтный: localhost:8080/ 
5) Можете заглянуть в файл config.js - можно добавить кастомизацию к валидации форм или корневому адресу api

### 2 Вариант - Docker
Этот способ удобен для финального деплоя

1) В файле config.js (который в public директории, а не в архиве) - измените baseUrl на полный адрес бэкенда в докер сети . Например, http://backend:8080

2) Разместите сервис с фронтом в docker compose  - он будет работать через nginx  проксировать запросы с 80 порта на ваш бэкенд внутри докер сети
3) Не забудьте про CORS на стороне спринга, т.к. запросы будут идти для него с другого хоста.
4) docker compose up - проверяем по адресу http://localhost