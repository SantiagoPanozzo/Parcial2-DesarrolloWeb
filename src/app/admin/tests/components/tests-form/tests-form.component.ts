import { Component, EventEmitter, OnInit } from '@angular/core';
import { ITest } from '../../interfaces/ITest';
import { TestService } from '../../services/test.service';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { NotifierComponent } from 'src/app/shared/components/notifier/notifier.component';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { INotification } from '../../../../shared/interfaces/INotification';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tests-form',
  templateUrl: './tests-form.component.html',
  styleUrls: ['./tests-form.component.css']
})
export class TestsFormComponent implements OnInit {

  public test: ITest =  {
    name: '',
    description: '',
    initials: '',
    isactive: false,
    } as ITest;

  public testForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required, Validators.minLength(3)],
    description: ['', Validators.required, Validators.minLength(3)],
    initials: ['', Validators.required, Validators.minLength(2)], // si tiene 2 iniciales deben haber al menos 3 letras en el nombre...
    isactive: [false, Validators.required],
  });

  constructor(
    private testService : TestService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getTest();


  }

  getTest(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.testService.getTest(id).subscribe(test => this.test = test);
    }
  }

  createTest(): void {
    this.testService.createTest(this.test);
  }

  updateTest(): void {
    this.testService.updateTest(this.test);
  }

  onSave: EventEmitter<ITest> = new EventEmitter<ITest>();

  onSubmit(form: NgForm): void {
    if(form.valid){
      if(this.test.id){
        this.updateTest();
      } else {
        this.createTest();
      }
      this.onSave.emit(this.test);
      this.router.navigate(['/admin/tests']);
    } else {
      this.notificationService.notify({ message: 'ERROR: Todos los campos son necesarios', type: 'danger' });
      // Lo siguiente está horrible pero es lo que se me ocurrió en mi estado mental actual

    }
  }


}
