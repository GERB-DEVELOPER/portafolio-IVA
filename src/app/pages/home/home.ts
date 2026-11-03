import { Component,signal, OnInit,OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE,HIGHLIGHTS} from '../../data/portfolio.data';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {
    profile = PROFILE;
    highlights = HIGHLIGHTS;
 // ===== MÁQUINA DE ESCRIBIR =====
typedText = signal('');
 private roleIndex = 0;  
  private charIndex = 0; 
  private deleting = false;  
  private timerId: ReturnType<typeof setTimeout> | undefined; 

  private readonly typeSpeed = 90; 
  private readonly deleteSpeed = 45;  
  private readonly pauseAtEnd = 1800; 
  private readonly pauseAtStart = 400;

 ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }

  private tick(): void {
  
    const role = this.profile.roles[this.roleIndex];
    let delay = this.typeSpeed; 
    
    if (!this.deleting) {
      this.charIndex++;
      if (this.charIndex === role.length) {
        this.deleting = true;
        delay = this.pauseAtEnd;
      }
    } else { 
      this.charIndex--;
      delay = this.deleteSpeed;
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.profile.roles.length;
        delay = this.pauseAtStart;
      }
    }
    this.typedText.set(role.slice(0, this.charIndex));
    this.timerId = setTimeout(() => this.tick(), delay);
}


} //fin
