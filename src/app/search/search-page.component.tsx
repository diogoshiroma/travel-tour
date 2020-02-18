import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Residence } from '../../model/entities';
import { ResidencesListComponent } from '../../components/mol.residences-list/residences-list.component';
import { SearchForm } from '../../components/org.search-form';
import { VSeparator } from '../../components/atm.separators';
import { ErrorMessage } from '../../components/typography.style';
import { Strings } from '../../resources';
import { PageTitle } from '../../components/mol.page-title';

interface SearchPageInterface {
  onChangeCity: (event: any) => void;
  onChangeCheckinDate: (event: any) => void;
  onChangeCheckoutDate: (event: any) => void;
  onSubmit: () => Residence[];
  onBlurCheckinDate: () => void;
  onBlurCheckoutDate: () => void;
  onBlurCity: () => void;
  disabled: boolean;
  checkinInvalidDateFormat: boolean;
  checkinNonExistingDate: boolean;
  checkoutInvalidDateFormat: boolean;
  checkoutNonExistingDate: boolean;
  checkinAfterCheckout: boolean;
  emptyCity: boolean;
  dirtyCheckin: boolean;
  dirtyCheckout: boolean;
  dirtyCity: boolean;
}

export const SearchPage = (props: SearchPageInterface) => {
  const [resList, setResList] = React.useState<Residence[]>([]);
  const [dirtyForm, setDirtyForm] = React.useState(false);
  
  const handleSubmit = () => {
    const list = props.onSubmit();
    setResList(list);
    setDirtyForm(true);
  };

  return (
    <>
      <PageTitle showButton={false} />
      <VSeparator />
      <SearchForm
        onChangeCity={props.onChangeCity}
        onChangeCheckinDate={props.onChangeCheckinDate}
        onChangeCheckoutDate={props.onChangeCheckoutDate}
        onSubmit={handleSubmit}
        onBlurCheckinDate={props.onBlurCheckinDate}
        onBlurCheckoutDate={props.onBlurCheckoutDate}
        onBlurCity={props.onBlurCity}
        disabled={props.disabled}
        checkinInvalidDateFormat={props.checkinInvalidDateFormat}
        checkinNonExistingDate={props.checkinNonExistingDate}
        checkoutInvalidDateFormat={props.checkoutInvalidDateFormat}
        checkoutNonExistingDate={props.checkoutNonExistingDate}
        checkinAfterCheckout={props.checkinAfterCheckout}
        emptyCity={props.emptyCity}
        dirtyCheckin={props.dirtyCheckin}
        dirtyCheckout={props.dirtyCheckout}
        dirtyCity={props.dirtyCity}
      />
      {
        resList.length > 0 ?
          <ResidencesListComponent residences={resList} />
        :
          dirtyForm && (
            <>
              <VSeparator />
              <ErrorMessage>{Strings.Components.ResidencesForm.NoResFound}</ErrorMessage>
            </>
          )
      }
    </>
  );
};
