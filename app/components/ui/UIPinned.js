import {Grid, Header, Segment} from "semantic-ui-react";
import {LabelBar} from "./UIArticle";

const UIPinned = ({ items }) => {
    let groupingItems = [];
    let c = 0;

    for (let group in items) {
        if (group % 2 == 0) {
            c++;
        }

        if (typeof groupingItems[c] === 'undefined') {
            groupingItems[c] = [];
        }

        let item = items[group];
        groupingItems[c].push(
            <Grid.Column width={8}>
                <PinnedItem
                    tags={item.tags}
                    labels={item.labels}
                    text={item.text}
                    title={item.title}
                />
            </Grid.Column>
        );
    }

    return (
        <Grid>
            {
                groupingItems.map(( group, key ) => (
                    <Grid.Row columns={2}>
                        { group }
                    </Grid.Row>
                ))
            }
        </Grid>
    )
};

const PinnedItem = ({ title, labels }) => (
    <Segment>
        <Header as='h5'>
            <a href="/post/13" style={{
                textDecoration: 'none',
                color: 'rgba(0,0,0,.87)'
            }}>
                { title }
            </a>
        </Header>

        <LabelBar
            ratings={labels.ratings}
            bookmarks={labels.bookmarks}
            comments={labels.comments}
            views={labels.views}
        />
    </Segment>
);

export default UIPinned;