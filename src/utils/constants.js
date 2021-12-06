export const authors = {
    human: "Вы",
    bot: "Бот"
};

export const initChats = [
    {
        name: "Бот-тупица",
        id: "FoolBot"
    },
    {
        name: "Бот-хам",
        id: "AngryBot"
    },
    {
        name: "Бот-зануда",
        id: "BoringBot"
    }
];

const initialMessage = {
    FoolBot: "Привет! Это чат поддержки. Напишите свой вопрос. О чём хотите спросить?",
    AngryBot: "Эй ты! Чё те надо?",
    BoringBot: "Здравствуйте! Это бот чата поддержки. Напишите свой вопрос, и я постараюсь ответить как можно скорее. Надеюсь, Вам понравится общение со мной. О чём бы Вы хотели спросить?"
};

export const botMessage = {
    FoolBot: "Оператор ответит Вам позже.",
    AngryBot: "Пшёл отсюда! Проваливай!",
    BoringBot: "Извините, пожалуйста, но в данный момент все операторы заняты. Подождите, и первый освободившийся оператор ответит на ваш вопрос. Надеюсь, Вам нравится общение со мной. Хорошего Вам настроения!"
};

const addState = chatID => {
    return [{
        author: authors.bot,
        text: initialMessage[chatID]
    }];
}

export const initChatsState = {
    FoolBot: addState('FoolBot'),
    AngryBot: addState('AngryBot'),
    BoringBot: addState('BoringBot')
}

export const apiUrl = "https://api.math.tools/numbers/nod";

export const REQUEST_STATUS = {
    IDLE: 0,
    LOADING: 1,
    SUCCESS: 2,
    FAILURE: 3,
  };