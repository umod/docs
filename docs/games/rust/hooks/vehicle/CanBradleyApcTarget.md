---
hide_table_of_contents: true
---

# CanBradleyApcTarget

## Usage

* Called when an APC targets an entity
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanBradleyApcTarget(BradleyAPC apc, BaseEntity entity)
{
    Puts("CanBradleyApcTarget works!");
    return null;
}
```
