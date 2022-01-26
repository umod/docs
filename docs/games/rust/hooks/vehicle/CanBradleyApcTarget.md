---
hide_table_of_contents: true
---

# CanBradleyApcTarget

## Usage

* Called when an APC targets an entity
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanBradleyApcTarget(BradleyAPC apc, BaseEntity entity)
{
    Puts("CanBradleyApcTarget works!");
    return true;
}
```
