import './style.scss';

const button = document.querySelector('#button');
// console.log(button);
button?.addEventListener('click', (e: Event) => {
    // console.log('Button was clicked');
    const main = document.querySelector('#main') as HTMLElement;
    main.style.backgroundColor = '#F4F4F4';

    // const main2 = <HTMLElement>document.querySelector('#main');
    // main2.style.backgroundColor = '#F4F4F4';
    console.log(typeof e);
});
