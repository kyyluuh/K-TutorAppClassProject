import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-tutor',
  templateUrl: './add-tutor.page.html',
  styleUrls: ['./add-tutor.page.scss'],
})
export class AddTutorPage implements OnInit {
  TutorInfo = {
    Name:'',
    Email:'',
    Year:'',
    Subjects:''
  }
  constructor(private firestore: AngularFirestore,
    private router: Router) {}

  ngOnInit() {
  }

  saveNewTutor(): void{
    this.firestore.collection('TutorInfo').add(this.TutorInfo).then(()=>{
      this.TutorInfo = null;
      this.router.navigateByUrl('tablinks')
    
  });
  }

}
