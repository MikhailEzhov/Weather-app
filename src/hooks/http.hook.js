import { useState, useCallback } from "react";



// Кастомный хук, для запросов на сервер:
// позволяет: 
//  отправлять запросы,
//  обрабатывать результаты запроса,
//  менять состояния при загрузке и при ошибке,
//  очищать ошибки
const useHttp = () => {

    // состояния:
    const [loading, setLoading] = useState(false);              // загрузка
    const [error, setError] = useState(null);                   // ошибка


    // запрос = мемоизируем (ассинхронная функция, в ней аргументы с дефолтными значениями)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true);  // состояние - загрузка - вкл

        try {                                                                          // при положительном исходе:
            const response = await fetch(url, {method, body});                         // ждем ответ.  было сначало {method, body, headers} и выдавало ошибку 

            if (!response.ok) {                                                        // проверяем (ok или error)
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();                                        // ждем когда ответ превратится в json формат

            setLoading(false);                                                         // состояние - загрузка - выкл

            return data;

        } catch(e) {              // при ошибке:
            setLoading(false);    // состояние - загрузка - выкл
            setError(e.message);  // состояние - ошибка - передаем сообщение об ошибке
            throw e;              // исключаем-выкадываем ошибку
        }
    }, []);


    // очищение ошибок = мемоизируем (состояние - ошибка - null)
    const clearError = useCallback(() => setError(null), []);


    return {loading, error, request, clearError}; // возвращаем объект с необходимыми сущьностями их этого хука
}


export default useHttp;