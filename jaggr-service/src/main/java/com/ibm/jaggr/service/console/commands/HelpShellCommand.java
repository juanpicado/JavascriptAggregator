/*
 * (C) Copyright 2012, IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.ibm.jaggr.service.console.commands;

import org.apache.felix.gogo.commands.Command;

import com.ibm.jaggr.service.impl.AggregatorCommandProvider;

@Command(scope = "aggregator", name = "help", description="shows aggregator help")
public class HelpShellCommand extends AbstractOsgiCommandSupport {
	@Override
	protected void exec(AggregatorCommandProvider provider) throws Exception {
		System.out.println(provider.getHelp().replaceAll("\taggregator ", "\taggregator:")); //$NON-NLS-1$ //$NON-NLS-2$
	}
}
