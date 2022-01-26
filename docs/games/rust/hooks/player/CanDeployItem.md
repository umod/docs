---
hide_table_of_contents: true
---

# CanDeployItem

## Usage

* Useful for denying items' deployment
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object CanDeployItem(BasePlayer player, Deployer deployer, uint entityId)
{
    Puts("CanDeployItem works!");
    return null;
}
```
