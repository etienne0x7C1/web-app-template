import React from "react";
import {
    Route,
    Switch,
    useLocation,
    Link,
    useRouteMatch
} from "react-router-dom";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props: any) => {
    const { children } = props
    let { path, url } = useRouteMatch();
    let location = useLocation();

    // console.log("path: " + path);
    // console.log("url: " + url);

    let baseUrl = url;//.charAt(url.length - 1) === '#/' ?  : url;
    console.log(baseUrl);
    while (baseUrl.charAt(baseUrl.length - 1) === '/' || baseUrl.charAt(baseUrl.length - 1) === '#') baseUrl = baseUrl.slice(0, baseUrl.length - 1);
    console.log(baseUrl);

    return (<>
        {(path === location.pathname) && <ul>
            {React.Children.map(children, (child) => (<li>
                {/* <Link to={`${baseUrl}/${child.type.name}`}>{child.type.name}</Link> */}
                <Link
                    to={{
                        pathname: `${baseUrl}/${child.type.name}/`,
                        // hash: "#the-hash",
                        // state: { fromDashboard: true }
                    }}
                >{child.type.name}</Link>
            </li>))}
        </ul>}
        <Switch>
            {React.Children.map(children, (child) => (
                <Route path={`${baseUrl}/${child.type.name}/`}>
                    {/* <Route path={`${path}/:topicId`}> */}
                    {child}
                </Route>))}
        </Switch>
    </>)
}

export const AppChildren = ({ ...props }) => {
    const { children } = props;
    const str = window.location.hash.slice(1);
    // extract app sample name
    const childName = str.split('?')[0];
    // extract params
    const args = str.split('?')[1];
    const argList: any = args?.length ? args.split('&') : [];
    console.log(argList);
    // look for matching app sample
    let childMatch: any; //= children.find(child => child.type.name === childName);
    React.Children.forEach(children, (child) => {
        if (child.type.name === childName) {
            const childProps: any = {};
            argList.map((assignments: any) => assignments.split('='))
                .forEach((operands: any) => {
                    const key = operands[0];
                    const val = operands[1];
                    childProps[key] = val;
                });
            childMatch = React.cloneElement(child, childProps)
        }
    });
    childMatch && console.log("Load app sample " + childMatch?.type?.name);

    return (<>
        {/* {props.showOptions? <ShowOptions options={}/>:""} */}
        {childMatch ? childMatch :
            // ? <Link
            //     to={{
            //         // pathname: `${baseUrl}/${child.type.name}/`,
            //         hash: sampleName,
            //         // state: { fromDashboard: true }
            //     }}
            // >#{sampleName}</Link> : 
            <ul>
                {React.Children.map(children, (child) => (<li>
                    <Link
                        to={{
                            // pathname: `${baseUrl}/${child.type.name}/`,
                            hash: `${child.type.name}`,
                            // state: { fromDashboard: true }
                        }}>
                        {child.type.name}
                    </Link>
                </li>))}
            </ul>}
    </>)
}

export const NavBar = () => {
    let location = useLocation();
    let hash = window.location.hash;
    return (<div className="NavBar">{location.pathname}{hash}</div>)
}

// WIP: multiselect dropdown (react-select) to select url options
export const ShowOptions = ({ options }: { options: any }) => {
    console.log(options);
    const onOptionDropdown = () => {

    }
    return (<div>
        {/* <ul>
            {Object.keys(options).map(key => <li style={{ color: options[key] ? "red" : "white" }}>{key}</li>)}
        </ul> */}
        {/* <FontAwesomeIcon
            icon={faTrash}
            size="xs"
            style={{ margin: "4px 0px 0px 10px" }}
            onClick={onOptionDropdown}
        /> */}
    </div>)
}
