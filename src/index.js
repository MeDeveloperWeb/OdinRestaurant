import './styles.css';
import htmlEl from './utils/render';
import { footer, header } from './layout';
import home from './pages/home';
import recipes from './pages/recipe';
import setRoute, { getRoute } from './utils/router';
import contact from './pages/contact';

function component() {
  return htmlEl({
    tag: 'div',
    id: "content",
    children: [
      header(),
      htmlEl({
        tag: "main",
        children: [
          home(),
          recipes(),
          contact()
        ]
      }),
      footer()
    ]
  });
}

function showPage() {
  const section = getRoute() || "home";
  setRoute(section);
}
  
document.body.appendChild(component());
showPage();