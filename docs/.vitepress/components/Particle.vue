<template>
  <canvas class="particle" ref="cvs"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue';
import { getRandomInt, hexToRgba } from '../utils';

const cvs = ref<HTMLCanvasElement>();

let lastMoveTime;

class Point {
  private r: number;
  public x: number;
  public y: number;
  private xSpeed: number;
  private ySpeed: number;
  private cvs: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  constructor(cvs) {
    this.r = 3;
    this.x = getRandomInt(0, cvs.width - this.r / 2);
    this.y = getRandomInt(0, cvs.height - this.r / 2);
    this.xSpeed = getRandomInt(-50, 50);
    this.ySpeed = getRandomInt(-50, 50);
    this.cvs = cvs;
    this.ctx = cvs.getContext('2d');
  }

  draw(color = '#fff') {
    if (lastMoveTime) {
      const now = Date.now();
      const t = (now - lastMoveTime) / 1000;
      let x = this.x + this.xSpeed * t;
      let y = this.y + this.ySpeed * t;
      if (x > this.cvs.width - this.r || x < 0) {
        this.xSpeed = -this.xSpeed;
        if (x > this.cvs.width - this.r) {
          x = this.cvs.width - this.r;
        } else {
          x = 0;
        }
      }
      if (y > this.cvs.height - this.r || y < 0) {
        this.ySpeed = -this.ySpeed;
        if (y > this.cvs.height - this.r) {
          y = this.cvs.height - this.r;
        } else {
          y = 0;
        }
      }
      this.x = x;
      this.y = y;
    }
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}

class Graph {
  private points: Point[];
  private maxDis: number;
  private cvs: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  constructor(
    pointNumber = 30,
    maxDis = 255,
    cvs,
    private color = '#fff',
  ) {
    this.cvs = cvs;
    this.ctx = cvs.getContext('2d');
    this.points = new Array(pointNumber).fill(0).map(() => new Point(cvs));
    this.maxDis = maxDis;
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

    for (let i = 0; i < this.points.length; i++) {
      let p1 = this.points[i];
      p1.draw(this.color);
      for (let j = i + 1; j < this.points.length; j++) {
        let p2 = this.points[j];
        let dis = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2),
        );
        if (dis <= this.maxDis) {
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.closePath();
          // this.ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dis / this.maxDis})`;
          this.ctx.strokeStyle = hexToRgba(this.color, 1 - dis / this.maxDis);
          console.log(167, hexToRgba(this.color, 1 - dis / this.maxDis));
          this.ctx.stroke();
        }
      }
    }
    lastMoveTime = Date.now();
  }
}

onMounted(() => {
  if (cvs.value) {
    cvs.value.width = window.innerWidth;
    cvs.value.height = window.innerHeight;

    const g = new Graph(28, 200, cvs.value);
    let id;
    // const html:HTMLElement = document.querySelector('html')!;
    const html:HTMLElement = document.querySelector('html') as HTMLElement;
    function render() {
      const isDark = html.classList.contains('dark');
      // const color = isDark ? '#ffffff' : '#000000';
      const color = isDark ? '#ffffff' : '#5468ff';
      g.setColor(color);
      g.draw();
      id = requestAnimationFrame(render);
    }

    render();

    function visibilitychange() {
      if (document.visibilityState === 'visible') {
        lastMoveTime = Date.now();
        render();
      } else if (document.visibilityState === 'hidden') {
        cancelAnimationFrame(id);
      }
    }

    document.addEventListener('visibilitychange', visibilitychange);

    onUnmounted(() => {
      cancelAnimationFrame(id);
      document.removeEventListener('visibilitychange', visibilitychange);
    });
  }
});
</script>

<style scoped>
.particle {
  position: absolute;
  top: 0;
  left: 0;
  /* width: 100%;
  height: 100%; */
  z-index: -1;
  background-color: var(--vp-c-bg);
  /* background-color: rgb(0, 0, 0); */
  /* border: 1px solid red; */
  border: none;
}
</style>
