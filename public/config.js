window.APP_CONFIG = {

    //ссылка на ваш гитхаб репозиторий с проектом
    githubLink: "https://gist.github.com/zhukovsd/1052313b231bb1eebd5b910990ee1050",

    //API префикс вашего бэка
    baseApi: "/api",


    /*
    *
    * Конфигурация валидации форм
    *
    * */

    //Если true - форма будет валидироваться,
    //ошибки будут отображаться при вводе. Кнопка будет активна только при валидных данных
    //Если false - форму можно отправить без валидации.
    validateLoginForm: true,
    validateRegistrationForm: true,

    //валидное имя пользователя
    validUsername: {
        minLength: 5,
        maxLength: 20,
        pattern: "^[a-zA-Z0-9]+[a-zA-Z_0-9]*[a-zA-Z0-9]+$",
    },

    //валидный пароль
    validPassword: {
        minLength: 5,
        maxLength: 20,
        pattern: "^[a-zA-Z0-9!@#$%^&*(),.?\":{}|<>[\\]/`~+=-_';]*$",
    },




};