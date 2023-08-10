import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
// import { ReactSVG } from 'react-svg'

const NavigationElementTab = forwardRef((props, ref) => {

  const tablinks = props.links.filter((link) => {
    return link.imageUrl;
  })

  const menu1 = props.links.filter((link) => {
    return !link.children.length && !link.imageUrl && link.orders < 7;
  })

  const menu2 = props.links.filter((link) => {
    return link.children.length || link.orders > 6;
  })

  return (
    <>
      <div className="tabs__button-inner">
        {tablinks.map((link) => {
          return <div className="tabs__button-link">
            <Link to={link.slug} onClick={() => props.handleClass(ref, props.typeClass)}>
              <img src={process.env.REACT_APP_SERVER_URL + link.imageUrl} alt='menu-icon' width={70} height={70} />
              {/* <ReactSVG
                      beforeInjection={(svg) => {
                        svg.classList.add('tabs__button-svg')
                        svg.setAttribute('style', 'width: 70px; height: 70px;');
                      }} 
                    src={process.env.REACT_APP_SERVER_URL + link.imageUrl} 
                    /> */}
              <p>{link.name}</p>
            </Link>
          </div>
        })}
      </div>
      <nav className='menu1'>
        <ul className="menu1__list">
          {menu1.map((link) => {
            return <li className="menu1__list-item">
              <Link to={link.slug} onClick={() => props.handleClass(ref, props.typeClass)}>{link.name}</Link>
            </li>
          })}
        </ul>
      </nav>
      <nav className='menu2'>
        <ul className="menu2__list">
          {menu2.map((link) => {
            if (link.children.length) {
              return <li className="menu2__list-item drop">
                <button> {link.name}
                  <svg className='link-arrow' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.74372 0.251051C7.08543 0.585786 7.08543 1.1285 6.74372 1.46323L2.11244 6L6.74372 10.5368C7.08543 10.8715 7.08543 11.4142 6.74372 11.7489C6.40201 12.0837 5.84799 12.0837 5.50628 11.7489L0.256282 6.60609C-0.0854276 6.27136 -0.0854275 5.72864 0.256282 5.39391L5.50628 0.251051C5.84799 -0.0836838 6.40201 -0.0836838 6.74372 0.251051Z" fill="#858A8F" />
                  </svg>
                </button>
                <div className="dropdown-content online">
                  {link.children.map((childLink) => {
                    return <Link to={childLink.slug} onClick={() => props.handleClass(ref, props.typeClass)}>{childLink.name}</Link>
                  })}
                </div>
              </li>
            }
            else {
              return <li className="menu2__list-item">
                {
                  (link.onclick != undefined)?
                    <Link to={link.slug} onClick={() => {link.onclick(); props.handleClass(ref, props.typeClass)}}>{link.name}</Link> 
                  :
                    <Link to={link.slug} onClick={() => props.handleClass(ref, props.typeClass)}>{link.name}</Link> 
                }
                </li>
            }
          })}
        </ul>
      </nav>
      <div className="tabs__personal">
        <div className="tabs__personal-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99307 0C6.43984 0.00295108 4.921 0.457522 3.62153 1.30834C2.32206 2.15916 1.29806 3.36951 0.674255 4.79197C0.0504461 6.21442 -0.146246 7.78758 0.108138 9.31984C0.362521 10.8521 1.057 12.2773 2.10698 13.4219V13.4219C2.8569 14.2348 3.76705 14.8835 4.7801 15.3272C5.79314 15.7709 6.88711 16 7.99307 16C9.09902 16 10.193 15.7709 11.206 15.3272C12.2191 14.8835 13.1292 14.2348 13.8792 13.4219V13.4219C14.9291 12.2773 15.6236 10.8521 15.878 9.31984C16.1324 7.78758 15.9357 6.21442 15.3119 4.79197C14.6881 3.36951 13.6641 2.15916 12.3646 1.30834C11.0651 0.457522 9.54629 0.00295108 7.99307 0V0ZM7.99307 14.4149C6.33412 14.4124 4.74084 13.7665 3.54847 12.613C3.91048 11.7318 4.52631 10.978 5.3177 10.4475C6.1091 9.91703 7.04033 9.6338 7.99307 9.6338C8.9458 9.6338 9.87704 9.91703 10.6684 10.4475C11.4598 10.978 12.0757 11.7318 12.4377 12.613C11.2453 13.7665 9.65201 14.4124 7.99307 14.4149ZM6.39141 6.40662C6.39141 6.08984 6.48535 5.78018 6.66134 5.51679C6.83733 5.2534 7.08748 5.04811 7.38014 4.92689C7.6728 4.80566 7.99484 4.77394 8.30553 4.83574C8.61622 4.89754 8.90161 5.05009 9.12561 5.27408C9.3496 5.49808 9.50215 5.78346 9.56395 6.09415C9.62575 6.40485 9.59403 6.72688 9.4728 7.01955C9.35158 7.31221 9.14629 7.56236 8.8829 7.73835C8.61951 7.91434 8.30984 8.00828 7.99307 8.00828C7.56828 8.00828 7.16089 7.83953 6.86053 7.53916C6.56016 7.23879 6.39141 6.83141 6.39141 6.40662ZM13.5268 11.2116C12.8113 9.98773 11.71 9.03576 10.3955 8.50479C10.8033 8.04244 11.069 7.47225 11.1607 6.86264C11.2524 6.25304 11.1663 5.62991 10.9127 5.06804C10.659 4.50616 10.2487 4.02941 9.73079 3.69499C9.21291 3.36057 8.60954 3.18269 7.99307 3.18269C7.3766 3.18269 6.77322 3.36057 6.25534 3.69499C5.73747 4.02941 5.32709 4.50616 5.07345 5.06804C4.81981 5.62991 4.73369 6.25304 4.82542 6.86264C4.91714 7.47225 5.18283 8.04244 5.59058 8.50479C4.2761 9.03576 3.17486 9.98773 2.45935 11.2116C1.88911 10.2403 1.58782 9.13461 1.58644 8.00828C1.58644 6.30914 2.26143 4.67959 3.4629 3.47811C4.66438 2.27664 6.29392 1.60166 7.99307 1.60166C9.69221 1.60166 11.3218 2.27664 12.5232 3.47811C13.7247 4.67959 14.3997 6.30914 14.3997 8.00828C14.3983 9.13461 14.097 10.2403 13.5268 11.2116V11.2116Z" fill="#EBEFF2" />
          </svg>
          <Link to="#">Персональний кабінет</Link>
        </div>
        <div className="tabs__personal-login">
          <Link to="https://my.lez.com.ua/Register" target={"_blank"}>Реєстрація у кабінеті</Link>
          <svg className='tabs__personal-svg' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.256282 11.7489C-0.0854272 11.4142 -0.0854273 10.8715 0.256282 10.5368L4.88756 6L0.256281 1.46323C-0.0854277 1.1285 -0.0854277 0.585786 0.256281 0.251051C0.59799 -0.083684 1.15201 -0.083684 1.49372 0.251051L6.74372 5.39391C7.08543 5.72864 7.08543 6.27136 6.74372 6.60609L1.49372 11.7489C1.15201 12.0837 0.59799 12.0837 0.256282 11.7489Z" fill="#FFC736" />
          </svg>
        </div>
        {/* <div className="tabs__personal-login">
          <Link to="https://my.lez.com.ua/" target={"_blank"}>Вхід у кабінет</Link>
          <svg className='tabs__personal-svg' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.256282 11.7489C-0.0854272 11.4142 -0.0854273 10.8715 0.256282 10.5368L4.88756 6L0.256281 1.46323C-0.0854277 1.1285 -0.0854277 0.585786 0.256281 0.251051C0.59799 -0.083684 1.15201 -0.083684 1.49372 0.251051L6.74372 5.39391C7.08543 5.72864 7.08543 6.27136 6.74372 6.60609L1.49372 11.7489C1.15201 12.0837 0.59799 12.0837 0.256282 11.7489Z" fill="#FFC736" />
          </svg>
        </div> */}
      </div>
    </>
  )
})

export default NavigationElementTab