import React, { Component }  from 'react';
import "../static/Project.css";
import { Link } from "react-router-dom";

const Post = ({ projectObject }) => {
	return (
		<div className="project">
			<div className="header">
				<img src={projectObject.image} alt="projectImage" />
			</div>
			<div className="content">
				<h1>{projectObject.title}</h1>
				<p>{projectObject.shortDescription}</p>
				<div className="link">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M.9,270.51c.17,2.85.37,5.68.64,8.53.75,8.65,1.87,17.28,3.42,25.86,7.26,39.57,24.64,76.72,48.87,108.61,29.07,37.16,68.65,65.83,112.27,83.2a257,257,0,0,0,79.77,15.11l1.51.18s0-.11,0-.15c2.86.07,5.72,0,8.58,0a286.31,286.31,0,0,0,87-14c44-17.36,84.4-45.62,113.89-83.18,23-29.76,39.75-63.81,48-100.22,1.12-4.54,2.14-9.11,3-13.71a259.88,259.88,0,0,0,3.59-37.55c.09-2.82.13-5.66.11-8.49,0-.3,0-.57,0-.88,0-3.57-.16-7.13-.34-10.71,0-.55-.06-1.11-.08-1.67-.18-2.84-.38-5.7-.64-8.53-.76-8.66-1.88-17.29-3.43-25.86-7.26-39.57-24.63-76.73-48.86-108.64C429.09,61.34,389.52,32.66,345.9,15.3A257,257,0,0,0,266.12.19L264.62,0l0,.16c-2.87-.08-5.72-.06-8.59,0a287,287,0,0,0-87,14C125,31.46,84.63,59.72,55.15,97.27c-23,29.76-39.75,63.81-48,100.23C6,202,5,206.62,4.16,211.2A258.81,258.81,0,0,0,.58,248.75c-.08,2.84-.11,5.69-.11,8.5,0,.29,0,.57,0,.86,0,3.59.15,7.14.33,10.72C.84,269.38.88,269.94.9,270.51ZM357.5,442.45c8.42-20.41,19.2-39.81,27.76-60.51.57-1,1.16-2,1.75-3.07,13.06,1.58,26.11,3.56,39.15,6.32C407.31,408.75,384.86,429.59,357.5,442.45ZM465.82,295.89c-.32,1.71-.66,3.43-1,5.13-.26,1.24-.52,2.49-.82,3.73-.39,1.71-.83,3.38-1.27,5.08A278.35,278.35,0,0,1,447,352.88c-16.38-2.36-32.4-5.46-48.38-8.58,5.38-23.86,10.64-47.42,13-71.7h57A165.71,165.71,0,0,1,465.82,295.89ZM446.35,158.71C458.61,184.06,466.59,211,468.79,239c-19.17.36-38,.4-56.8.4a374.2,374.2,0,0,0-8.86-72.24C417.27,164.36,431.81,161.55,446.35,158.71Zm-21-31.84q-16.34,3.95-32.69,6.63c-9-20.1-19-39.88-27.9-60.4A197.32,197.32,0,0,1,425.36,126.87ZM273.91,43.62c6.16.91,13,1,19.59,2a14.42,14.42,0,0,1,5.56,5.18c20.18,27.46,37.15,56.95,49.26,88.85a466.78,466.78,0,0,1-74.41,4.9Zm0,136.09c28.81,0,57.59-2.83,86.38-6,6.53,21.17,11.51,43.42,12.67,65.69h-99Zm0,92.88c33.3,0,66.57-.31,99.87.28a221.28,221.28,0,0,1-8.9,65.49,742.77,742.77,0,0,0-91-6Zm0,95.3c26.69-.39,53.38,2.35,79.66,5.53-12.32,30.5-28.34,60.14-48.85,85.7-7.2,9.71-19.85,8.21-30.81,9.2ZM86.64,385.14q16.35-4,32.69-6.62c9,20.09,19,39.88,27.9,60.39A197.19,197.19,0,0,1,86.64,385.14Zm151.45,83.25c-6.15-.9-13-1-19.6-2a14.66,14.66,0,0,1-5.57-5.18c-20.17-27.46-37.15-57-49.26-88.85a466.9,466.9,0,0,1,74.42-4.92Zm0-136.08c-28.8,0-57.59,2.81-86.39,6-6.52-21.17-11.49-43.41-12.68-65.67h99.06Zm0-92.87c-33.3,0-66.57.3-99.87-.29a221.87,221.87,0,0,1,8.88-65.49,744.59,744.59,0,0,0,91,6ZM207.27,52.91c7.22-9.72,19.87-8.22,30.82-9.21V144.12c-26.69.4-53.37-2.35-79.66-5.52C170.75,108.08,186.78,78.45,207.27,52.91ZM154.49,69.57c-8.41,20.41-19.18,39.82-27.76,60.5-.57,1-1.16,2.05-1.74,3.09-13-1.6-26.09-3.58-39.16-6.33C104.68,103.27,127.13,82.42,154.49,69.57ZM46.16,216.13c.33-1.72.67-3.45,1-5.15.27-1.24.53-2.49.84-3.72.39-1.7.84-3.4,1.28-5.08a277.6,277.6,0,0,1,15.65-43c16.37,2.36,32.39,5.45,48.39,8.56-5.4,23.87-10.66,47.42-13,71.72H43.44A164.28,164.28,0,0,1,46.16,216.13ZM100,272.6a374.92,374.92,0,0,0,8.86,72.23c-14.13,2.83-28.67,5.65-43.21,8.48C53.38,328,45.41,301,43.2,273,62.36,272.63,81.2,272.6,100,272.6Z" />
					</svg>
					<a href={projectObject.url} target="_blank">
						{projectObject.url}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Post;
