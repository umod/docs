---
hide_table_of_contents: true
---

# OnNetworkSubscriptionsUpdate

## Usage

* Called when an entity attempts to network with a player
For better performance, avoid using heavy calculations in this hook.
* Return true or false to override default behavior

## Examples

```csharp title=""
object OnNetworkSubscriptionsUpdate(Network.Networkable networkable, List<Network.Visibility.Group> groupsToAdd, List<Network.Visibility.Group> groupsToRemove)
{
    Puts("OnNetworkSubscriptionsUpdate works!");
    return null;
}
```
