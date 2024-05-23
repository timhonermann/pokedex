import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexComponent } from './pokedex.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { inject } from '@angular/core';
import { PokedexActions } from '../../state/pokedex.actions';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexComponent],
      providers: [provideMockStore()]
    }).compileComponents();

    store = inject(MockStore);

    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should dispatch loadPokemons action', () => {
      // arrange
      const dispatchSpy = jest.spyOn(store, 'dispatch');

      // act
      component.ngOnInit();

      // assert
      expect(dispatchSpy).toHaveBeenCalledWith(PokedexActions.loadPokemons())
    });
  });

  describe('loadMore', () => {
    it('should dispatch loadMorePokemons action', () => {
      // arrange
      const dispatchSpy = jest.spyOn(store, 'dispatch');

      // act
      component.loadMore();

      // assert
      expect(dispatchSpy).toHaveBeenCalledWith(PokedexActions.loadMorePokemons())
    });
  });

  describe('navigateToDetail', () => {
    it('should dispatch navigateToDetail action', () => {
      // arrange
      const id = 'foo';
      const dispatchSpy = jest.spyOn(store, 'dispatch');

      // act
      component.navigateToDetail(id);

      // assert
      expect(dispatchSpy).toHaveBeenCalledWith(PokedexActions.navigateToDetail({ id }))
    });
  });
});
