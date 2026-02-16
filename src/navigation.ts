import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/index.html')
    },
    {
      text: 'Catalogo',
      href: getPermalink('/homes/catalogo')
    },
    {
      text: 'Ofertas',
      href: getPermalink('/homes/ofertas')
    },
  ],
};

export const footerData = {
 links: [
  
  ],
  secondaryLinks: [

  ],
  socialLinks: [
  ],
};
