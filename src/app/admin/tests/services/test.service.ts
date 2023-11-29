import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITest } from '../interfaces/ITest';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) { }

  getTests() : Observable<ITest[]> {
    return this.http.get<ITest[]>(`${baseUrl}/admin/tests`);
  }

  getTest(id: number) : Observable<ITest> {
    return this.http.get<ITest>(`${baseUrl}/admin/tests/${id}`);
  }

  createTest(test: ITest) : void {
    this.http.post<ITest>(`${baseUrl}/admin/tests`, test).subscribe((res) => {
      console.log(res);
    });
    this.notificationService.notify({ message: 'Test creado con éxito', type: 'success' });
  }

  updateTest(test: ITest) : void {
    this.http.put<ITest>(`${baseUrl}/admin/tests/${test.id}`, test).subscribe((res) => {
      console.log(res);
    });
    this.notificationService.notify({ message: 'Test actualizado con éxito', type: 'success' });
  }

  deleteTest(id: number) : void {
    this.http.delete<ITest>(`${baseUrl}/admin/tests/${id}`).subscribe((res) => {
      console.log(res);
    });
    this.notificationService.notify({ message: 'Test eliminado con éxito', type: 'success' });
  }
}
