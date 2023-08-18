const paragraphs = document.querySelectorAll('.typing-demo p');

paragraphs.forEach(paragraph => {
  const lines = paragraph.textContent.split('\⠀');
  const originalText = paragraph.textContent;
  paragraph.textContent = '';

  let loopCount = 0;
  const maxLoops = 100; 
  let lineIndex = 0;
  let charIndex = 0;
  const typeDelay = 25; 
  const pauseDelay = 1000; 

  function type() {
    if (loopCount < maxLoops) {
      if (lineIndex < lines.length) {
        const line = lines[lineIndex];
        if (charIndex < line.length) {
          paragraph.textContent += line.charAt(charIndex);
          charIndex++;
          setTimeout(type, typeDelay);
        } else {
          paragraph.textContent += '⠀'; 
          charIndex = 0;
          lineIndex++;
          setTimeout(type, typeDelay);
        }
      } else {
        loopCount++;
        if (loopCount < maxLoops) {
          setTimeout(resetAndType, pauseDelay);
        }
      }
    }
  }

  function resetAndType() {
    lineIndex = 0;
    charIndex = 0;
    paragraph.textContent = '';
    setTimeout(type, typeDelay);
  }

  type();
});
