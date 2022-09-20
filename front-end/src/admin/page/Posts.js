import React from "react";
import service from "../../services";
import ArticleList from "../../components/articlesList";
import '../../styles/post-admin.css';
import {AddOutlined} from '@material-ui/icons'
export default class PostAdmin extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }

    async componentDidMount(){
        service.getPosts().then(data =>{
            this.setState({
                posts: data.posts.reverse()
            })
        }).catch(error =>{
            console.log('error: '+error);
        })
    }

    render(){
        return(
            <div>
                <div className="header">
                    <h2>Tous les postes</h2>
                    <div className="add-post"> 
                        <a href="/admin/post" className="link">
                            Ajouter post
                            <AddOutlined />
                        </a>
                    </div>
                </div>
                <div className="body">
                    <ArticleList posts={this.state.posts} />
                </div>
            </div>
        )
    }
}