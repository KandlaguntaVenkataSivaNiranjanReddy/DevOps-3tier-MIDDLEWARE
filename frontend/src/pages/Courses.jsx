export default function Courses() {
  const courses = [
    "Linux","Shell Scripting","Git & GitHub","Maven","Tomcat",
    "Apache / Nginx","SonarQube","Nexus","Jenkins","Ansible",
    "AWS","Docker","Kubernetes","Terraform","Prometheus & Grafana",
    "DevSecOps","SRE"
  ];

  return (
    <div>
      <h1>DevOps Courses</h1>
      <ul>{courses.map(c => <li key={c}>{c}</li>)}</ul>
    </div>
  );
}
