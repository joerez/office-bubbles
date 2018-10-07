import React, { Component } from 'react';
import utils, {randomIntFromRange, randomColor, distance, rotate, resolveCollision} from './utils/game-utils'

class Game extends React.Component {

  componentDidMount() {

    const canvas = this.refs.canvas
    const c = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }

    const colors = ['#2185C5', '#2c3e50', '#c0392b']
    var mouseX;
    var mouseY;
    // Event Listeners
    window.addEventListener('mousemove', event => {
        mouse.x = event.clientX
        mouse.y = event.clientY
        mouseX = mouse.x;
        mouseY = mouse.y;
    })

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        init()
    })

    //Press B for Big ball
    window.addEventListener("keydown", event => {
      let color = randomColor(colors);
    if (event.keyCode == 66) {
      let bigBall = new Particle(mouse.x, mouse.y, 50, color)
      bigBall.velocity.x = (Math.random() -0.5) * 10
      bigBall.velocity.y = (Math.random() -0.5) * 10
      particles.push(bigBall)
    }
  })

    // Objects
    function Particle(x, y, radius, color) {
        this.x = x
        this.y = y
        this.velocity = {
          x: (Math.random() -0.5) * 5,
          y: (Math.random() -0.5) * 5
        }
        this.radius = radius
        this.color = color
        this.mass = 1;
        this.opacity = 0;


        //hit space, reverse direction aand increase velocity.
        window.addEventListener("keydown", event => {

          if (event.keyCode != 32) {
            if (event.keyCode == 82) {
              return init()
            }
          }
          if (distance(mouse.x, mouse.y, this.x, this.y) < 120) {
              this.velocity.x *= -1.3;
              this.velocity.y *= -1.3;
            }
        })


        window.addEventListener('click', event => {
            mouse.x = event.clientX
            mouse.y = event.clientY
            let color = randomColor(colors);
            let radius = this.radius / 2


              if (distance(mouse.x, mouse.y, this.x, this.y) < 30) {
                  if (particles.length < 1000) {
                    this.radius - 2;
                    particles.push(new Particle(mouse.x, mouse.y, radius, this.color))
                  }
                }


        })

        this.update = particles => {
            this.draw()

            for (let i = 0; i < particles.length; i++) {
              if (this === particles[i]) continue;
              if (distance(this.x, this.y, particles[i].x, particles[i].y) < this.radius + particles[i].radius) {
                resolveCollision(this, particles[i]);
              }
            }

            if (this.x - this.radius <= 0 || this.x + this.radius >= window.innerWidth) {
              this.velocity.x = -this.velocity.x
            }

            if (this.y - this.radius <= 0 || this.y + this.radius >= window.innerHeight) {
              this.velocity.y = -this.velocity.y
            }

            //mouse collision detection
            if (distance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity < 0.6 && this.radius < 50) {
              this.opacity += 0.06;
              this.radius += .8
            } else if (this.opacity > 0 || this.radius > 50) {
              this.opacity -= 0.06;
              this.radius -= .8
              this.opacity = Math.max(0, this.opacity);
              this.radius = Math.max(9, this.radius);
            }

            this.x += this.velocity.x;
            this.y += this.velocity.y;
        }

        this.draw = function() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.save();
            c.globalAlpha = this.opacity;
            c.fillStyle = this.color
            c.fill()
            c.restore();
            c.strokeStyle = this.color
            c.stroke()
            c.closePath()
        }
    }



    // Implementation
    let particles;
    function init() {
        particles = []

        for (let i = 0; i < 30; i++) {
            const radius = randomIntFromRange(9,11);
            let x = randomIntFromRange(radius, canvas.width - radius)
            let y = randomIntFromRange(radius, canvas.height - radius)
            const color = randomColor(colors);

            if (i !== 0) {
              for (let j = 0; j < particles.length; j++) {
                if (distance(x, y, particles[j]. x, particles[j].y) - radius * 2 < 0) {
                   x = randomIntFromRange(radius, canvas.width - radius)
                   y = randomIntFromRange(radius, canvas.height - radius);

                   j = -1;
                }
              }
            }

            particles.push(new Particle(x, y, radius, color))
        }
    }

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate)
        c.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach(particle => {
          particle.update(particles);
        })
    }

    init()
    animate()
  }


render() {
    return(
      <div>
        <canvas className="background" ref="canvas" />
      </div>
    )
  }
}

export default Game
