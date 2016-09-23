// Node packages
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Variables
const API_KEY = "AIzaSyB2l5WGJRfNFeSdm18sV5v5X-mRVo3EB1M";

// The parent component - set up as an ES6 class
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        // Go grab videos and set up our state object
        YTSearch({key: API_KEY, term: 'puppies'}, videos => {
            this.setState({ 
                videos, 
                selectedVideo: videos[0] 
            });
        });

    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos } />
            </div>
        );        
    }

}


ReactDOM.render(<App/>, document.querySelector('.container'));
