---
hide_table_of_contents: true
---

# CanNetworkTo

## Usage

* Called when an entity attempts to network with a player
For better performance, avoid using heavy calculations in this hook.
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanNetworkTo(BaseNetworkable entity, BasePlayer target)
{
    Puts("CanNetworkTo works!");
    return null;
}
```
