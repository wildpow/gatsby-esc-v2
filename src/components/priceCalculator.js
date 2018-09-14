import React from 'react';
import MakeOffer from '../components/makeOffer/makeOffer';
import { DropDown, PriceTitle, AddBoxTitle,
          Total, BeforeSalePrice, Wrapper,
          DropDownSize, DropDownWrapper 
        } from '../styles/priceCalStyles';
class PriceCalculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sizeSector: '0',
      boxSector: '1',
      totalMattOnlyPrice: 0,
      totalSetPrice: 0,
      boxPrice: 0,
      name: '',
      BoxAdded: false,
      opacityAddBox: 0,
      opacityIsNaN: 0,
      opacityTotal: 0,
      notFoundOrAddText: true,
      isOnSale: false,
      boxDisabled: true,
      saleOpacity: 0,
      mattOnlyPrices: null,
      setPrices: null,
      isNaNBool: false
    }
    this.mattSizeSector = this.mattSizeSector.bind(this);
    this.AddBoxPrice = this.AddBoxPrice.bind(this);
  }
  mattSizeSector(e) {
    this.setState({
      sizeSector: e.target.value,
    },() => this.checkForSalePrice())
  }

  checkForSalePrice() {
    const SizeSector = Number(this.state.sizeSector)
    if (this.props.mattOnlySale === null ||
        this.props.mattOnlySale[SizeSector] === undefined ||
        this.props.mattOnlySale[SizeSector] === 0) {
      this.setState({
        isOnSale: false,
        mattOnlyPrices: this.props.mattOnly,
        setPrices: this.props.setPrice
      }, () => this.changePrice())
    } else {
      this.setState({
        isOnSale: true,
        mattOnlyPrices: this.props.mattOnlySale,
        setPrices: this.props.setPriceSale
      }, () => this.changePrice())
    }
  }
  changePrice() {
    const { sizeSector } = this.state;
    switch(sizeSector) {
      case '0':
        this.setState({
          name: 'Twin',
          totalMattOnlyPrice: this.state.mattOnlyPrices[0],
          totalSetPrice: this.state.setPrices[0],
          boxPrice: this.props.boxPrice[0],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      case '1':
        this.setState({
          name: 'TwinXL',
          totalMattOnlyPrice: this.state.mattOnlyPrices[1],
          totalSetPrice: this.state.setPrices[1],
          boxPrice: this.props.boxPrice[1],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      case '2':
        this.setState({
          name: 'Full',
          totalMattOnlyPrice: this.state.mattOnlyPrices[2],
          totalSetPrice: this.state.setPrices[2],
          boxPrice: this.props.boxPrice[3],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      case '3':
        this.setState({
          name: 'Queen',
          totalMattOnlyPrice: this.state.mattOnlyPrices[3],
          totalSetPrice: this.state.setPrices[3],
          boxPrice: this.props.boxPrice[3],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      case '4':
        this.setState({
          name: 'King/Cal. King',
          totalMattOnlyPrice: this.state.mattOnlyPrices[4],
          totalSetPrice: this.state.setPrices[4],
          boxPrice: this.props.boxPrice[4],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      default:
        this.setState({
          opacityAddBox: 0,
          opacityTotal: 0,
          BoxAdded: false,
          opacityIsNaN: 0,
          boxSector: '1',
          name: '',
          boxDisabled: true,
          saleOpacity: 0
        })
    }
  }

  PriceCheck() {
    if(this.state.totalMattOnlyPrice === '-n/a-') {
      this.setState({ 
        opacityIsNaN: 1,
        isNaNBool: true,
        opacityAddBox: 0,
        opacityTotal: 0,
        notFoundOrAddText: false,
      },() => this.showSale())
    } else {
      this.setState({ 
        opacityIsNaN: 0,
        isNaNBool: false,
        opacityAddBox: 1,
        opacityTotal: 1,
        notFoundOrAddText: true,
        boxDisabled: false
      },() => this.showSale())
    }
  }
  showSale() {
    if(this.state.isOnSale && !this.state.isNaNBool) {
      this.setState({
        saleOpacity: 1
      })
    } else {
      this.setState({
        saleOpacity: 0
      })
    }
  }
  AddBoxPrice(e) {
    if(this.state.BoxAdded) {
      this.setState({
        boxSector: e.target.value,
        total: this.state.mattOnlyPrices[this.state.sizeSector],
        BoxAdded: false
      })
    } else {
      this.setState({
        boxSector: e.target.value,
        total: this.state.setPrices[this.state.sizeSector],
        BoxAdded: true
      })
    }
  }
  boxdropdown() {
    return (
      <div style={{opacity: this.state.opacityAddBox, transition: 'opacity 350ms ease-in-out'}}>
        <DropDown onChange={this.AddBoxPrice} value={this.state.boxSector} disabled={this.state.boxDisabled}>
          <option value={'1'}>[$0.00] No Box Spring</option>
          <option value={'2'}>[${this.state.boxPrice}.00] Standard Foundation</option>
        </DropDown>
      </div>
    )
  }
  render() {
    return (
      <Wrapper>
        <DropDownWrapper>
          <PriceTitle>PRICE: {this.state.name}</PriceTitle>
          <div>
            <DropDownSize onChange={this.mattSizeSector}>
              <option value='10'>Select Size</option>
              <option value='0'>Twin</option>
              <option value='1'>Twin Extra Long</option>
              <option value='2'>Full</option>
              <option value='3'>Queen</option>
              <option value='4'>King/Cal. King</option>
            </DropDownSize>
          </div>
        </DropDownWrapper>
        <DropDownWrapper>
          {this.state.notFoundOrAddText ? 
            <AddBoxTitle style={{opacity: this.state.opacityAddBox, transition: 'opacity 350ms ease-in-out'}}>
              Add a Box Spring
            </AddBoxTitle> : 
            <AddBoxTitle style={{opacity: this.state.opacityIsNaN, transition: 'opacity 350ms ease-in-out'}}>
              Size is Unavailable
            </AddBoxTitle>}
          {this.boxdropdown()}
        </DropDownWrapper>
        {this.state.isOnSale ? 
          <BeforeSalePrice style={{opacity: this.state.saleOpacity, transition: 'opacity 350ms ease-in-out'}}>
            ${
            this.state.BoxAdded ?
            this.props.setPrice[this.state.sizeSector]
              :
              this.props.mattOnly[this.state.sizeSector]
            }
          </BeforeSalePrice> 
        : <BeforeSalePrice style={{opacity: this.state.saleOpacity, transition: 'opacity 350ms ease-in-out'}}>
            ${
            this.state.BoxAdded ?
              this.props.setPrice[0]
              :
              this.props.mattOnly[0]
            }
        </BeforeSalePrice>}
        <Total style={{opacity: this.state.opacityTotal, transition: 'opacity 700ms ease-in-out'}}>
          TOTAL: ${this.state.BoxAdded ? this.state.totalSetPrice : this.state.totalMattOnlyPrice}
        </Total> 
        <MakeOffer  
          disabled={this.state.boxDisabled}
          opacity={this.state.opacityTotal} // MakeOffer only shows when total is visiable
          mattress={this.props.mattress} // from SingleMattres -> priceCalculator ->
          size={this.state.name}
        />
    </Wrapper>
    )
  }
}

// sizeSector: '0',
// boxSector: '1',
// totalMattOnlyPrice: 0,
// totalSetPrice: 0,
// boxPrice: 0,
// name: '',
// BoxAdded: false,
// opacityAddBox: 0,
// opacityIsNaN: 0,
// opacityTotal: 0,
// notFoundOrAddText: true,
// isOnSale: false,
// boxDisabled: true,
// saleOpacity: 0,
// mattOnlyPrices: null,
// setPrices: null,
// isNaNBool: false


export default PriceCalculator;