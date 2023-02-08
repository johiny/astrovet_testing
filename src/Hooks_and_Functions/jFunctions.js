const isOutsideVh = (id) => {
    const element = document.querySelector(`#${id}`)
    const elementBox = element.getBoundingClientRect()
    return (
        Math.abs(elementBox.y) > elementBox.height
  );
}

export {isOutsideVh};