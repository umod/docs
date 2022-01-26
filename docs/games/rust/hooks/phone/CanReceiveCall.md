---
hide_table_of_contents: true
---

# CanReceiveCall

## Usage

* Called when a player tries to place a phone call
* Returning true or false overrides default behavior

## Examples

```csharp title=""
object CanReceiveCall(PhoneController receiverPhone)
{
    Puts("CanReceiveCall works!");
    return null;
}
```
