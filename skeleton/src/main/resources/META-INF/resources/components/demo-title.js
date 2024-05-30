import {LitElement, html, css} from 'lit';
import '@vaadin/icon';
import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/text-area';
import '@vaadin/form-layout';
import '@vaadin/progress-bar';
import '@vaadin/checkbox';
import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-sort-column.js';

export class DemoTitle extends LitElement {

    static styles = css`
      h1 {
        font-family: "Red Hat Mono", monospace;
        font-size: 60px;
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
        line-height: 26.4px;
        color: var(--main-highlight-text-color);
      }

      .title {
        text-align: center;
        padding: 1em;
        background: var(--main-bg-color);
      }
      
      .explanation {
        margin-left: auto;
        margin-right: auto;
        width: 85%;
        text-align: center;
        font-size: 24px;
      }

      .explanation2 {
        margin-left: auto;
        margin-right: auto;
        width: 85%;
        text-align: left;
        font-size: 18px;
      }
      
      .explanation img {
        width: 100%;
        display: inline-block;
        text-align: center;
        margin-right: 2em;
        margin-top: 1em;
      }
    `

    render() {
        return html`
            <div class="title">
                <h1>Ask Me Anything</h1>
            </div>
            
            <div class="explanation">
                  This demo walks you through building and deploying a Java chatbot powered by a Large Language Model (LLM) entirely on-premise.
            </div>

            <div class="explanation2">
                  <ul>
                    <li> <b>Local Development</b>: We'll leverage Podman Desktop AI Lab to set up a development environment for your Java AI application using the InstructLab/Granite LLM model locally.
                    <li> <b>OpenShift AI</b>: Once developed, we'll deploy your chatbot to <a href="https://www.redhat.com/en/technologies/cloud-computing/openshift/openshift-ai" target="_blank">OpenShift AI</a> using <a href="https://access.redhat.com/products/red-hat-developer-hub/" target="_blank">Red Hat Developer Hub</a>. This streamlined platform simplifies the deployment process.
                    <li> <b>Enhanced Security</b>: <a href="https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes" target="_blank">Red Hat Advanced Cluster Security for Kubernetes</a> and  <a href="https://www.redhat.com/en/products/trusted-application-pipeline" target="_blank">Red Hat Trusted Application Pipeline</a> safeguard your deployment with advanced security measures.
                </ul>
            </div>

            <div align="center" font-size="medium"> 
              <p style="font-size:30px">
                When you're ready to get started, click <img src="images/chatbot-icon.png" width="40" height="35"/> button on the bottom right.
              </p>
            </div>

            <div class="explanation">
                <img src="images/demo-architecture.png"/>
            </div>
        `
    }


}

customElements.define('demo-title', DemoTitle);