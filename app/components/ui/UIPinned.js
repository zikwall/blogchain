import { Grid, Header, Segment } from "semantic-ui-react";
import UIPinsModal from "./UIPinsModal";
import { useThemeContext, UILabelBar } from "@blogchain/components";

const UIPinned = ({ items }) => {
    const [ theme ] = useThemeContext();
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
            <Grid.Column width={8} key={group}>
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
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '10px',
                paddingBottom: '10px'
            }}>
                <span style={{ color: theme.isDark ? '#ffffff' : '#000000' }}>
                    Pinned
                </span>
                <UIPinsModal />
            </div>
            <Grid>
                {
                    groupingItems.map(( group, key ) => (
                        <Grid.Row key={key} columns={2}>
                            { group }
                        </Grid.Row>
                    ))
                }
            </Grid>
        </div>
    )
};

const PinnedItem = ({ title, labels }) => {
    const [ theme ] = useThemeContext();

    return (
        <Segment inverted={theme.isDark}>
            <Header as='h5' inverted={theme.isDark}>
                <a href="/post/13" style={{
                    textDecoration: 'none',
                    color: theme.isDark ? '#ffffff' : 'rgba(0,0,0,.87)'
                }}>
                    { title }
                </a>
            </Header>

            <UILabelBar
                ratings={labels.ratings}
                bookmarks={labels.bookmarks}
                comments={labels.comments}
                views={labels.views}
            />
        </Segment>
    )
};

export default UIPinned;