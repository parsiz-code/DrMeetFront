export const drowTextBGToCanvas = (ctx: CanvasRenderingContext2D, txt: string, fontSize: string, color: string, backGroundColor: string, x: number, y: number) => {

  ctx.save();
  ctx.font = `${fontSize}px vazir`;
  ctx.textBaseline = 'top';
  ctx.fillStyle = backGroundColor;
  const width = ctx.measureText(txt).width;
  ctx.fillRect(x - width - 5, y - 5, width + 10, parseInt(fontSize, 10) + 10);
  ctx.fillStyle = color;
  ctx.fillText(txt, x, y);
  ctx.restore();
}