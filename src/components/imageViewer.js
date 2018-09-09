import React from 'react'
import NodeGroup from 'react-move/NodeGroup';
import { ImgWrapper, SmallImgHolder, SmImg, LargeImg } from '../styles/imageViewerStyles';


class ImageViewer extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0
    };
  }
  changeActiveImage = (event) => {
    this.setState({
      currentImageIndex: Number(event.currentTarget.dataset.id)
    });
  }
  render() {
    const ImagesArray = [this.props.cover, this.props.img1, this.props.img2];
    return (
      <ImgWrapper style={{position: 'relative'}}>
        <NodeGroup style={{position: 'relative'}}
          data={[this.state.currentImageIndex]}
          keyAccessor={d => d}
          start={() => ({
            opacity: 0
          })}
          enter={() => ({
            opacity: [1],
            timing: { duration: 300 }
          })}
          update={() => ({
            opacity: [1],
            timing: { duration: 300 }
          })}
          leave={() => ({
            opacity: [0],
            timing: { duration: 300 }
          })}
          >
          {nodes => (
            <div style={{position: 'relative'}}>
              {nodes.map(({ key, data, state: { opacity } }) => (
                <div key={key} style={{ opacity, position: 'relative' }}>
                <LargeImg
                  src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${ImagesArray[data]}`}
                  alt={`Large image of ${this.props.fullname} ${this.props.type}`}
                  style={{position: 'absolute'}}
                />
                </div>
              ))}
            </div>
          )}
          </NodeGroup>
        <SmallImgHolder style={{position: 'relative'}}>
          <SmImg onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${ImagesArray[0]}`} data-id={0} alt={`Small image of ${this.props.fullname} ${this.props.type}`}/>
          <SmImg onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${ImagesArray[1]}`} data-id={1} alt={`Small image of ${this.props.fullname} ${this.props.type}`}/>
          <SmImg onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${ImagesArray[2]}`} data-id={2} alt={`Small image of ${this.props.fullname} ${this.props.type}`}/>
        </SmallImgHolder>
      </ImgWrapper>
    )
  }
}
export default ImageViewer