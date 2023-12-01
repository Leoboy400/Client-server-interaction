const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement;

const addContent =  (title: string, text: string, rating: string) => {
    let div: HTMLDivElement = document.createElement('div');
    div.className = 'contentBlock'
    let h2: HTMLHeadingElement = document.createElement('h2');
    h2.textContent = title;
    let p: HTMLParagraphElement = document.createElement('p');
    p.textContent = text;
    let p2: HTMLParagraphElement = document.createElement('p');
    p2.textContent = rating
    div.append(h2, p, p2);
    content.append(div);

}

export { addContent }