async function showImg(url: string) {
  let response: Response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch the logo');

  let blob: Blob = await response.blob();
  let img: HTMLImageElement = document.createElement('img');
  document.body.append(img)
  img.setAttribute('style', 'width:50px; height: 50px;')
  img.setAttribute('src', URL.createObjectURL(blob))

  // return img
}

export { showImg }