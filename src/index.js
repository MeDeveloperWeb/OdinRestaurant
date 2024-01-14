import './styles.css';
import htmlEl from './render';
import { footer, header } from './layout';
import home from './home';

function component() {
  return htmlEl({
    tag: 'div',
    id: "content",
    children: [
      header(),
      htmlEl({
        tag: "div",
        children: [
          home()
        ]
      }),
      footer()
    ]
  });
}
  
document.body.appendChild(component());