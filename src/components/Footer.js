import GooglePlay from '../images/google-play.svg' 

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer-links">
          <div className="col-12 col-sm-6 col-md-3">
            <ul className="list-unstyled">
              <li><a href="/">Довідка для покупців</a></li>
              <li><a href="/">Отримати підтримку</a></li>
              <li><a href="/">Як купувати</a></li>
              <li><a href="/">Як залишити корисний відгук</a></li>
              <li><a href="/">Програма Захисту Покупців</a></li>
              <li><a href="/">Рекомендації з безпечних покупок</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 mt-md-0">
            <ul className="list-unstyled">
              <li><a href="/">Довідка для продавців</a></li>
              <li><a href="/">Як почати продавати</a></li>
              <li><a href="/">Тарифи</a></li>
              <li><a href="/">Угода користувача</a></li>
              <li><a href="/">Політика конфіденційності</a></li>
              <li><a href="/">Правила користування порталом</a></li>
              <li><a href="/">Бонусна програма</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 mt-md-0">
            <ul className="list-unstyled">
              <li><a href="/">Про нас</a></li>
              <li><a href="/">Довідка та FAQ</a></li>
              <li><a href="/">Захист легальності контенту</a></li>
              <li><a href="/">Адміністрація</a></li>
              <li><a href="/">Вакансії</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 mt-md-0">
            <ul className="list-unstyled">
              <li>Мобільний додаток</li>
              <li>
                <a href="/">
                  <img src={GooglePlay} height="44" alt="Завантажити з Google Play"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span className="copyright">© 2022 Monvalise</span>
      </div>
    </footer>
  )
}
