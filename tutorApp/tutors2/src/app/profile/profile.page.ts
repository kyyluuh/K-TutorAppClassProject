import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage {
  TutorInfo;
  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('TutorInfo').valueChanges().subscribe(TutorInfo => {
      this.TutorInfo = TutorInfo;
      console.log(TutorInfo);
    })
  }
}



/*export class ProfilePage implements OnInit{
  searchField: FormControl;
  Subjects$: Observable<Subject[]>;

  constructor(private readonly firestore: Firestore, private router: Router, authService: AuthenticationService) {
    this.searchField = new FormControl('');
  }

  async ngOnInit() {
    const searchTerm$ = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );

    const Subjects$ = collectionData(query(collection(this.firestore, 'Subjects')));

    this.Subjects$ = combineLatest([Subjects$, searchTerm$]).pipe(
      map(([Subjects, searchTerm]) =>
        Subjects.filter(
          Subject =>
            searchTerm === '' || Subject.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );

  }

  navigate(){
    this.router.navigate(['/login'])
  }

}
interface Subject {
  name: string;
}*/
/*@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, authService: AuthenticationService) { }

  ngOnInit() {
  }
  navigate(){
    this.router.navigate(['/login'])
  }
}

// Firestore.instae.collection('userData').document('profileImages').get();*/
