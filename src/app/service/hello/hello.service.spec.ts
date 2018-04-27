import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HelloService } from './hello.service';

describe('HelloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HelloService]
    });
  });

  it('should be created', async(
    inject([HelloService], (service: HelloService) => {
      expect(service).toBeTruthy();
    })
  ));

  it('should say hello to vikz', async(
    inject([HelloService], (service: HelloService) => {
      const name = 'VikZ91';
      const expectedVal = 'Hello ' + name;
      const gotVal = service.say(name);
      expect(gotVal).toBe(expectedVal);
    })
  ));

  it('should fetch user list', async(
    inject([HelloService], (service: HelloService) => {
      service
        .getUsers()
        .toPromise()
        .then(data => {
          expect(data.length).toBeGreaterThan(0);
        });
    })
  ));

  it('should fetch 1st User Details', async(
    inject([HelloService], (service: HelloService) => {
      const expectedVal = 'Leanne Graham';
      service
        .getUser('1')
        .toPromise()
        .then(data => {
          expect(data.name).toEqual(expectedVal);
        });
    })
  ));
});
