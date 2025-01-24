const core = require('@actions/core');
const { execFileSync } = require('child_process');
const { sshAgentCmd } = require('./paths.js');

try {
    // Kill the started SSH agent
    console.log('Stopping SSH agent');
    console.log('SSH_AUTH_SOCK:', process.env.SSH_AUTH_SOCK);
    console.log('SSH_AGENT_PID:', process.env.SSH_AGENT_PID);
    console.log('sshAgentCmd:', sshAgentCmd);
    execFileSync(sshAgentCmd, ['-k'], { stdio: 'inherit' });
} catch (error) {
    console.log(error.message);
    console.log('Error stopping the SSH agent, proceeding anyway');
}
