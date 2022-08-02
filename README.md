# Portfolio

A site to view my projects, a little about me, showcase my skills and links to contact me.

## Tech 

  - React
  - React swipeable views
  - Material UI
  - react-tsparticles
-react-scroll
- react-typed


## Code excerpt 

```javascript
<SwipeableViews
        style={{ padding: "0 50px" }}
        className="cards-container"
        enableMouseEvents
      >
        {Object.entries(projects).map(([k, v], i) => {
          return (
            <ProjectCard
              {...v}
              key={v.title}
              onClickSiteOpen={handleSiteOpen}
            />
          );
        })}
</SwipeableViews>
```

## Attributions

- [Unsplash freely-usable images](https://unsplash.com/)

- [Open-source illustrations for any idea you can imagine and create.](https://undraw.com/)

## License
**_All rights reserved_**  
