---
hide_table_of_contents: true
---

# OnEntityFlagsNetworkUpdate

## Usage

* Called after an entity's flags have been updated on the server, before they are sent over the network
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEntityFlagsNetworkUpdate(BaseEntity entity)
{
    Puts("OnEntityFlagsNetworkUpdate works!");
    return null;
}
```
