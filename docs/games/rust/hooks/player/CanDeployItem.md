---
hide_table_of_contents: true
---

# CanDeployItem

## Usage

* Useful for denying items' deployment
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanDeployItem(BasePlayer player, Deployer deployer, uint entityId)
{
    Puts("CanDeployItem works!");
    return null;
}
```
